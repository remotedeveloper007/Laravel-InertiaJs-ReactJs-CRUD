<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Inertia::render('Users', [
            'users' => User::all()->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'edit_url' => route('users.edit', $user),
                    'delete_url' => route('users.destroy', $user),
                ];
            }),
            'create_url' => route('users.create'),
        ])->withViewData(['title' => 'CRUD Operation']);
        // ->withViewData(['meta' => $event->meta]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $store = route('users.store');
        return Inertia::render('Create', get_defined_vars());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        // dd($request->all());
        $this->validate($request, [
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'confirmed'],
            'password_confirmation' => ['required'],
            'thumbnail' => ['image', 'mimes:png,jpg,jpeg']
        ]);

        if ($request->hasFile('thumbnail')) {
            # code...
            $thumbnail = $request->thumbnail->store('images', 'public');
        }
        // return $thumbnail;
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'thumbnail' => $thumbnail ?? 'null',
        ]);

        return redirect()->route('users.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $user = User::findOrFail($id);
        return Inertia::render('Edit', ['id' => $user->id, 'name' => $user->name, 'email' => $user->email]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
        // dd($request->all());
        // $validated = $this->validate($request, [
        //     'name' => ['required'],
        //     'email' => ['required', 'email', 'unique:users']
        // ]);
        // $user = User::find($user)->update($validated);
        // return redirect()->route('users.index');
        // $this->authorize('update', $user);

        $validated = $request->validate([
            'id' => 'required',
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users,email,' . $user->id . ',id']
        ]);

        $user->update($validated);

        return redirect(route('users.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
        // dd($user);
        $user->delete();

        return redirect(route('users.index'));
    }
}