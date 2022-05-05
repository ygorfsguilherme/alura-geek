export function loadTemplate(file, local){
  let addTemplate = document.querySelector(`${local}`);
  addTemplate.innerHTML = geneTemplate(file)
}

export function geneTemplate(file){
  let response = '';
  let rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);

  rawFile.onreadystatechange = function (){
    if(rawFile.readyState === 4){
      if(rawFile.status === 200 || rawFile.status == 0){
        response = rawFile.responseText
      };

    }
  }

  rawFile.send(null);
  return response
}

loadTemplate('src/view/templates/header.html', '[data-header]');
loadTemplate('src/view/templates/footer.html', '[data-footer]');
loadTemplate('src/view/templates/modal.html', '[data-modal]');
