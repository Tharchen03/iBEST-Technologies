<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function submitContact(Request $request)
    {
        $toEmail = 'info@ibesttechoologies.bt';
        $request->validate([
            'g-recaptcha-response' => 'required',
            // Other form validation rules
        ]);

        $success = send_contact(
            $toEmail, 'contact Request',
            [
                'fullname' => $request->input('fullname'),
                'email_id' => $request->input('email_id'),
                'message' => $request->input('message'),
            ]
        );

        if ($success) {
            return redirect()->back()->with('success', 'Query submitted successfully!');
        } else {
            $errorMessage = 'Failed to submit Query.';
            // Pass error message to the view
            return redirect()->back()->with('success', $errorMessage);
        }
    }
}
