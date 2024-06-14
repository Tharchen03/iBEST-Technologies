<div class="row">
    <div class="col-12">
        <table class="body-wrap"
            style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: transparent; margin: 0;">
            <tr style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                <td class="container" width="600"
                    style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;"
                    valign="top">
                    <div class="content"
                        style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
                        <table class="main" width="100%" cellpadding="0" cellspacing="0" itemprop="action" itemscope
                            itemtype="#http://schema.org/ConfirmAction"
                            style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; margin: 0; border: none;">
                            <tr style="font-family: 'Roboto', sans-serif; font-size: 14px; margin: 0;">
                                <td class="content-wrap"
                                    style="font-family: 'Roboto', sans-serif; box-sizing: border-box; color: #495057; font-size: 14px; vertical-align: top; margin: 0;padding: 30px; box-shadow: 0 3px 15px rgba(30,32,37,.06); ;border-radius: 7px; background-color: #fff;"
                                    valign="top">
                                    <meta itemprop="name" content="Welcome Message"
                                        style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;" />
                                    <table width="100%" cellpadding="0" cellspacing="0"
                                        style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                        <tr
                                            style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                            <td class="content-block"
                                                style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"
                                                valign="top">
                                                <div style="text-align: center;margin-bottom: 15px;">
                                                    <img src="{{ URL::asset('assets/logos/logo-text-blue.png') }}"
                                                        alt="" height="70px">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr
                                            style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                            <td class="content-block"
                                                style="font-family: 'Roboto', sans-serif; box-sizing: border-box; line-height: 1.5; font-size: 24px; vertical-align: top; margin: 0; padding: 0 0 10px;text-align: center; font-weight: 500;"
                                                valign="top">
                                               Booking Request Sent By  <strong>{!! $detail['email_id'] !!}</strong>
                                            </td>
                                        </tr>
                                        <tr
                                            style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                            <td class="content-block"
                                                style="font-family: 'Roboto', sans-serif; color: #878a99; line-height: 1.5; box-sizing: border-box; font-size: 15px; vertical-align: top; margin: 0; padding: 0 0 24px; text-align: center;"
                                                valign="top">
                                               Full name: <strong>{{ $detail['fullname'] }}</h1></strong>
                                            </td>
                                        </tr>
                                        <tr
                                            style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                            <td class="content-block"
                                                style="font-family: 'Roboto', sans-serif; color: #878a99; line-height: 1.5; box-sizing: border-box; font-size: 15px; vertical-align: top; margin: 0; padding: 0 0 24px; text-align: center;"
                                                valign="top">
                                               Travel Type: <strong>{!! $detail['company'] !!}</strong>
                                            </td>
                                        </tr>
                                        <tr
                                            style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                            <td class="content-block"
                                                style="font-family: 'Roboto', sans-serif; color: #878a99; line-height: 1.5; box-sizing: border-box; font-size: 15px; vertical-align: top; margin: 0; padding: 0 0 24px; text-align: center;"
                                                valign="top">
                                               Mobile Number: <strong>{!! $detail['mobile_no'] !!}</strong>
                                            </td>
                                        </tr>
                                        <tr
                                            style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                            <td class="content-block"
                                                style="font-family: 'Roboto', sans-serif; color: #878a99; line-height: 1.5; box-sizing: border-box; font-size: 15px; vertical-align: top; margin: 0; padding: 0 0 24px; text-align: center;"
                                                valign="top">
                                               Number of Adults: <strong>{!! $detail['adults'] !!}</strong><br>
                                               Number of Children: <strong>{!! $detail['children'] !!}</strong>
                                            </td>
                                        </tr>
                                        <tr
                                            style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                            <td class="content-block"
                                                style="font-family: 'Roboto', sans-serif; color: #878a99; line-height: 1.5; box-sizing: border-box; font-size: 15px; vertical-align: top; margin: 0; padding: 0 0 24px; text-align: center;"
                                                valign="top">
                                                Requirement: <strong>{!! $detail['requirement'] !!}</strong>
                                            </td>
                                        </tr>
                                        {{-- <tr
                                            style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                            <td class="content-block" itemprop="handler" itemscope
                                                itemtype="http://schema.org/HttpActionHandler"
                                                style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 24px; text-align: center;"
                                                valign="top">
                                                <a href="{{ route('login') }}" itemprop="url"
                                                    style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: .8125rem;font-weight: 400; color: #FFF; text-decoration: none;text-align: center; cursor: pointer; display: inline-block; border-radius: .25rem; text-transform: capitalize; background-color: #0ab39c; margin: 0; border-color: #0ab39c; border-style: solid; border-width: 1px; padding: .5rem .9rem;"
                                                    onMouseOver="this.style.background='#099885'"
                                                    onMouseOut="this.style.background='#0ab39c'">Proceed to Login</a>
                                            </td>
                                        </tr> --}}
                                        <tr>
                                            <td></td>
                                        </tr>
                                        {{-- <tr
                                            style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                            <td class="content-block"
                                                style="font-family: 'Roboto', sans-serif; color: #878a99; box-sizing: border-box; line-height: 1.5; font-size: 15px; vertical-align: top; margin: 0; padding: 0 0 10px; text-align: center;"
                                                valign="top">
                                                Thank You
                                            </td>
                                        </tr> --}}
                                        <tr>
                                            <td></td>
                                        </tr>
                                        {{-- <tr
                                            style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                            <td class="content-block"
                                                style="color: #878a99; text-align: center;font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 11px; vertical-align: top; margin: 0; padding: 0; padding-top: 15px; border-top: 1px solid #e9ebec;"
                                                valign="top">
                                                If you received this email by mistake, simply delete it. If you are not
                                                the intended or authorized recipient, you must not use, copy, disclose
                                                or take any action based on this message or any information contained
                                                therein.
                                            </td>
                                        </tr> --}}
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <div style="text-align: center; margin: 10px 0px auto;">
                            <p
                                style="font-family: 'Roboto', sans-serif; font-size: 14px;color: #98a6ad; margin:
                            0px;">
                                {{ date('Y') }} oneBhutanAdventures. Design & Develop by <a
                                    href="https://www.ibestbhutan.com">IBEST</a></p>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</div>
