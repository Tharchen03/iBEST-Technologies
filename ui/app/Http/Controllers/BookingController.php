<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class BookingController extends Controller
{
    public function submitBooking(Request $request)
    {
        $toEmail = 'booking@onebhutan.com';
        $request->validate([
            'g-recaptcha-response' => 'required',
            // Other form validation rules
        ]);

        $success = send_booking(
            $toEmail, 'Booking Request',
            [
                'fullname' => $request->input('fullname'),
                'email_id' => $request->input('email_id'),
                'message' => $request->input('message'),
            ]
        );

        if ($success) {
            return redirect()->back()->with('success', 'Booking submitted successfully!');
        } else {
            $errorMessage = 'Failed to submit booking.';
            // Pass error message to the view
            return redirect()->back()->with('success', $errorMessage);
        }
    }
}
