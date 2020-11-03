export const types = {
    uiOpenModal: '[UI] openModal',
    uiCloseModal: '[UI] closeModal',
    uiStartLoading: '[UI] startLoading',
    uiFinishLoading: '[UI] finishLoading',

    calendarGetEvents: '[Calendar] getEvents',
    calendarSetEvent: '[Calendar] setEvent',
    calendarAddEvent: '[Calendar] AddEvent',
    calendarEditEvent: '[Calendar] EditEvent',
    calendarClearActive: '[Calendar] clearActive',
    calendarDeleteEvent: '[Calendar] deleteEvent',

    authChecking: '[Auth] Checking login state',
    authCheckingFinish: '[Auth] Finish Checking login state',
    authStartLogin: '[Auth] Start login',
    authLogin: '[Auth] Login',
    authStartRegister: '[Auth] Start Register',
    authStartTokenRenew: '[Auth] Start token renew',
    authLogout: '[Auth] Logout'
}