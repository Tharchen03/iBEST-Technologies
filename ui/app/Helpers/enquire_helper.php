<?php

use App\Mail\Welcome;
use App\Mail\EnquireMail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

if (!function_exists('send_enquire')) {
    function send_enquire($to, $subject, $detail, $template = 'default')
    {
        try {
            $mailable_template = match ($template) {
                'welcome' => new Welcome($subject, $detail),
                default => new EnquireMail($subject, $detail),
            };
            Mail::to($to)->send($mailable_template);
            Log::info('Email sent successfully to ' . $to);
            return true;
        } catch (\Exception $e) {
            Log::error('Error sending email to ' . $to . ': ' . $e->getMessage());
            return false;
        }
    }
}

