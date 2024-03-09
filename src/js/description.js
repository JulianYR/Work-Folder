const html = document.getElementById('html').addEventListener('click', seeDescriptionHtml)
const css = document.getElementById('css').addEventListener('click', seeDescriptionCss)
const js = document.getElementById('js').addEventListener('click', seeDescriptionJs)
const py = document.getElementById('py').addEventListener('click', seeDescriptionPy)
const git = document.getElementById('git').addEventListener('click', seeDescriptionGit)
const github = document.getElementById('github').addEventListener('click', seeDescriptionGitHub)

const htmlContainer = document.querySelector('.htmlContainer')
const cssContainer = document.querySelector('.cssContainer')
const jsContainer = document.querySelector('.jsContainer')
const pyContainer = document.querySelector('.pyContainer')
const gitContainer = document.querySelector('.gitContainer')
const githubContainer = document.querySelector('.githubContainer')

function seeDescriptionHtml(){

    if (document.querySelector('.htmlContainer')){
        htmlContainer.classList.remove('htmlContainer')
        htmlContainer.classList.add('htmlDescription')
    }
    else if (document.querySelector('.htmlDescription')){
        htmlContainer.classList.remove('htmlDescription')
        htmlContainer.classList.add('htmlContainer')
    }

}

function seeDescriptionCss(){

    if (document.querySelector('.cssContainer')){
        cssContainer.classList.remove('cssContainer')
        cssContainer.classList.add('cssDescription')
    }
    else if (document.querySelector('.cssDescription')){
        cssContainer.classList.remove('cssDescription')
        cssContainer.classList.add('cssContainer')
    }

}

function seeDescriptionJs(){

    if (document.querySelector('.jsContainer')){
        jsContainer.classList.remove('jsContainer')
        jsContainer.classList.add('jsDescription')
    }
    else if (document.querySelector('.jsDescription')){
        jsContainer.classList.remove('jsDescription')
        jsContainer.classList.add('jsContainer')
    }

}

function seeDescriptionPy(){

    if (document.querySelector('.pyContainer')){
        pyContainer.classList.remove('pyContainer')
        pyContainer.classList.add('pyDescription')
    }
    else if (document.querySelector('.pyDescription')){
        pyContainer.classList.remove('pyDescription')
        pyContainer.classList.add('pyContainer')
    }

}

function seeDescriptionGit(){

    if (document.querySelector('.gitContainer')){
        gitContainer.classList.remove('gitContainer')
        gitContainer.classList.add('gitDescription')
    }
    else if (document.querySelector('.gitDescription')){
        gitContainer.classList.remove('gitDescription')
        gitContainer.classList.add('gitContainer')
    }

}

function seeDescriptionGitHub(){

    if (document.querySelector('.githubContainer')){
        githubContainer.classList.remove('githubContainer')
        githubContainer.classList.add('githubDescription')
    }
    else if (document.querySelector('.githubDescription')){
        githubContainer.classList.remove('githubDescription')
        githubContainer.classList.add('githubContainer')
    }

}