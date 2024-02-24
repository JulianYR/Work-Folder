const html = document.getElementById('html').addEventListener('click', seeDescriptionHtml)
const css = document.getElementById('css').addEventListener('click', seeDescriptionCss)
const js = document.getElementById('js').addEventListener('click', seeDescriptionJs)
const py = document.getElementById('py').addEventListener('click', seeDescriptionPy)
const git = document.getElementById('git').addEventListener('click', seeDescriptionGit)
const github = document.getElementById('github').addEventListener('click', seeDescriptionGitHub)

const htmlContainer = document.querySelector('.htmlContainer')
const htmlDescription = document.querySelector('.htmlDescription')
const cssContainer = document.querySelector('.cssContainer')
const cssDescription = document.querySelector('.cssDescription')
const jsContainer = document.querySelector('.jsContainer')
const jsDescription = document.querySelector('.jsDescription')
const pyContainer = document.querySelector('.pyContainer')
const pyDescription = document.querySelector('.pyDescription')
const gitContainer = document.querySelector('.gitContainer')
const gitDescription = document.querySelector('.jsDescription')
const githubContainer = document.querySelector('.githubContainer')
const githubDescription = document.querySelector('.githubContainer')

let active = ''

function seeDescriptionHtml(){

    if (active !== ''){
        if (active == 'css'){
            htmlDescription.classList.remove('htmlDescription')
            htmlDescription.classList.add('htmlContainer')
            cssContainer.classList.remove('cssContainer')
            cssContainer.classList.remove('cssDescription')
        }
        else if (active == 'js'){
            htmlDescription.classList.remove('htmlDescription')
            htmlDescription.classList.add('htmlContainer')
            cssContainer.classList.remove('cssContainer')
            cssContainer.classList.remove('cssDescription')
        }
        else if (active == 'py'){
            htmlDescription.classList.remove('htmlDescription')
            htmlDescription.classList.add('htmlContainer')
            cssContainer.classList.remove('cssContainer')
            cssContainer.classList.remove('cssDescription')
        }
        else if (active == 'git'){
            htmlDescription.classList.remove('htmlDescription')
            htmlDescription.classList.add('htmlContainer')
            cssContainer.classList.remove('cssContainer')
            cssContainer.classList.remove('cssDescription')
        }
        else if (active == 'github'){
            htmlDescription.classList.remove('htmlDescription')
            htmlDescription.classList.add('htmlContainer')
            cssContainer.classList.remove('cssContainer')
            cssContainer.classList.remove('cssDescription')
        }
    }
    else {
        if (htmlContainer){
            htmlDescription.classList.remove('htmlContainer')
            htmlDescription.classList.add('htmlDescription')
            active = 'html'
        }
        else if (htmlDescription){
            htmlDescription.classList.remove('htmlDescription')
            htmlDescription.classList.add('htmlContainer')
        }
    }

}
function seeDescriptionCss(){

    if (active !== ''){
        if (active == 'html'){
            htmlDescription.classList.remove('htmlDescription')
            htmlDescription.classList.add('htmlContainer')
            cssContainer.classList.remove('cssContainer')
            cssContainer.classList.remove('cssDescription')
        }
    }
    else {
        if (cssContainer){
            const htmlDescription = document.querySelector('.cssContainer')
            htmlDescription.classList.remove('cssContainer')
            htmlDescription.classList.add('cssDescription')
            active = 'css'
        }
        else if (cssDescription){
            const htmlDescription = document.querySelector('.cssDescription')
            htmlDescription.classList.remove('cssDescription')
            htmlDescription.classList.add('cssContainer')
        }
    }

}
function seeDescriptionJs(){

    if (document.querySelector('.jsContainer')){
        const htmlDescription = document.querySelector('.jsContainer')
        htmlDescription.classList.remove('jsContainer')
        htmlDescription.classList.add('jsDescription')
    }
    else if (document.querySelector('.jsDescription')){
        const htmlDescription = document.querySelector('.jsDescription')
        htmlDescription.classList.remove('jsDescription')
        htmlDescription.classList.add('jsContainer')
    }

}
function seeDescriptionPy(){

    if (document.querySelector('.pyContainer')){
        const htmlDescription = document.querySelector('.pyContainer')
        htmlDescription.classList.remove('pyContainer')
        htmlDescription.classList.add('pyDescription')
    }
    else if (document.querySelector('.pyDescription')){
        const htmlDescription = document.querySelector('.pyDescription')
        htmlDescription.classList.remove('pyDescription')
        htmlDescription.classList.add('pyContainer')
    }

}
function seeDescriptionGit(){

    if (document.querySelector('.gitContainer')){
        const htmlDescription = document.querySelector('.gitContainer')
        htmlDescription.classList.remove('gitContainer')
        htmlDescription.classList.add('gitDescription')
    }
    else if (document.querySelector('.gitDescription')){
        const htmlDescription = document.querySelector('.gitDescription')
        htmlDescription.classList.remove('gitDescription')
        htmlDescription.classList.add('gitContainer')
    }

}
function seeDescriptionGitHub(){

    if (githubContainer){
        const htmlDescription = document.querySelector('.githubContainer')
        htmlDescription.classList.remove('githubContainer')
        htmlDescription.classList.add('githubDescription')
    }
    else if (document.querySelector('.githubDescription')){
        const htmlDescription = document.querySelector('.githubDescription')
        htmlDescription.classList.remove('githubDescription')
        htmlDescription.classList.add('githubContainer')
    }

}