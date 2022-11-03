//realtime data listener
db.collection('users').onSnapshot(snapshot =>{
    snapshot.docChanges().forEach(change => {

        if(change.type === "added"){
            renderuser(change.doc.data(), change.doc.id);
        }

        if(change.type === "removed"){
            removeuser(change.doc.id);
        }
        
    });

});

//add users
const form = document.querySelector('form');
form.addEventListener('submit', evt =>{
    evt.preventDefault();

    const user = {
        name: form.name.value,
        id: form.id.value
    };

    db.collection('users').add(user)
    .catch(er => console.log(er));

    form.name.value = '';
    form.id.value = '';

});

//delete user
const userContainer = document.querySelector('.users');

userContainer.addEventListener('click', evt => {

    if(evt.target.textContent === 'delete_outline'){
        const ID = evt.target.getAttribute('data-id');
        db.collection('users').doc(ID).delete();

    }                

});