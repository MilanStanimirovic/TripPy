function logout() {
    window.location.href = "/logout"
}

function settings() {
    window.location.href = "/settings"
}

function admin_users() {
    window.location.href = "/admin_users"
}

function dashboard() {
    window.location.href = "/admin_dashboard"
}

function admin_show_businesses() {
    window.location.href = "/admin_show_businesses"
}

function admin_show_routes() {
    window.location.href = "/admin_show_routes"
}

function admin_add_user() {
    window.location.href = "/admin_add_user"
}

function admin_business_requests() {
    window.location.href ='/admin_business_requests'
}

function admin_add_location()
{
    window.location.href='/admin_add_location'
}

function profile()
{
    window.location.href = "/profile"
}

function closeFlashMessage() {
        setTimeout(function() {
            var flashMessage = document.getElementById('flash-message');
            if (flashMessage) {
                flashMessage.style.display = 'none';
            }
        }, 5000);
    }

    window.onload = function() {
        closeFlashMessage();
    };