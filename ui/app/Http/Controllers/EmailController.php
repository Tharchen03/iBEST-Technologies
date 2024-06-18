<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class EmailController extends Controller
{
    public function sendEmail(Request $request)
    {
        // Validation
        $validator = Validator::make($request->all(), [
            'fullname' => 'required|string',
            'email_id' => 'required|email',
            'message' => 'required|string',
            'g-recaptcha-response' => 'required|recaptcha',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $data = $request->only('fullname', 'email_id', 'message');

        try {
            Mail::send([], [], function ($message) use ($data) {
                $message->from('sherabten098@gmail.com', 'Your Name')
                        ->to('cocodon098@gmail.com')
                        ->subject('Contact form submission from ' . $data['fullname'])
                        ->text('You have received a new message from ' . $data['fullname'] . ' (' . $data['email_id'] . '):' . "\n\n" . $data['message']);
            });

            return response()->json([
                'success' => true,
                'message' => 'Email sent successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to send email'
            ], 500);
        }
    }
}
