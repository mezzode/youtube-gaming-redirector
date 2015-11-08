// Save options to chrome.storage.sync
function save_options() {
    var redirect = document.getElementById('redirect').checked;
    var linker = document.getElementById('linker').checked;
    var feedly = document.getElementById('feedly').checked;
    chrome.storage.sync.set({
        redirect: redirect,
        linker: linker,
        feedly: feedly
    }, function() {
        // Update status
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function(){
            status.textContent = '';
        }, 750);
    });
}

// Load options from chrome.storage
function restore_options() {
    // Default values are all true.
    chrome.storage.sync.get({
        redirect: true,
        linker: true,
        feedly: true
    }, function(items) {
        document.getElementById('redirect').checked = items.redirect;
        document.getElementById('linker').checked = items.linker;
        document.getElementById('feedly').checked = items.feedly;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click, save_options');
