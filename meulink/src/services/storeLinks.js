
// Buscar os links salvos.
export async function getLinkSave(key) {
    const myLinks = await localStorage.getItem(key);

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

// Salvar um link no localStorage.
export async function saveLink(key, newLink) {
    let linksStored = await getLinkSave(key);

    const hasLink = linksStored.some(link => link.id === newLink.id)

    if (hasLink) {
        console.log('ESSE LINK JÁ EXISTE NA SUA LISTA!')
        return;
    }

    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('LINK SALVO COM SUCESSO!')
}

// Deletar algum link salvo.
export function deleteLink(links, id) {

    let myLinks = links.filter(item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtarLink', JSON.stringify(myLinks));
    console.log("LINK DELETADO COM SUCESSO!")

    return myLinks;
}