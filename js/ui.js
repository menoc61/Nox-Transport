const users = document.querySelector('.users');
document.addEventListener('DOMContentLoaded', function(){

    //access nav menu
    const menu = document.querySelectorAll('.side-menu');
    M.Sidenav.init(menu, {edge: 'left'});

    //access add user form
    const form = document.querySelectorAll('.side-form');
    M.Sidenav.init(form, {edge: 'right'});
});

const renderuser = (data, ID) => {

    const html = `
            <div class="card-panel user white row" data-id=${ID}>
                    <img src="../assets/user_empty.png" alt="user 1">
                    <div class="user-details">
                        <div class="user-name">${data.name}</div>
                        <div class="user-id">${data.id}</div>

                    <div class="user-delete">
                        <i class="material-icons" data-id=${ID} style="cursor:pointer;">delete_outline</i>
                    </div>
            </div>
    `;
    users.innerHTML += html;
};

const removeuser = (ID) => {
    const user = document.querySelector(`.user[data-id=${ID}]`);
    user.remove();
}
