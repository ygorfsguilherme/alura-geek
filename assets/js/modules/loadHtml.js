function loadTemplate(file, local){
  let addTemplate = document.querySelector(`${local}`);

  let rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);

  rawFile.onreadystatechange = function (){
    if(rawFile.readyState === 4){
      if(rawFile.status === 200 || rawFile.status == 0){
        addTemplate.innerHTML = rawFile.responseText;
      };

    }
  }

  rawFile.send(null);
}

loadTemplate('templates/header.html', '[data-header]');
loadTemplate('templates/footer.html', '[data-footer]');
