export function saveStatePlugin (store) {
    store.subscribe(
        (mutation, state) => {
            localStorage.setItem('board', JSON.stringify((state.trello.board)))
        }
    );
}
