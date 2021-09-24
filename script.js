const questions = document.getElementsByClassName("question");
const answers = document.getElementsByClassName("answer");
const faqs = document.getElementById("faqs");

function showAnswer(e) {
    let target = e.target;
    let answer = target.nextElementSibling;
    if (answer.classList.contains("hide")) {
        answer.classList.remove("hide");
        answer.classList.add("show");
        target.classList.add("active-question");
    } else if (answer.classList.contains("show")) {
        answer.classList.remove("show");
        target.classList.remove("active-question")
        answer.classList.add("hide");
    }
}

faqs.addEventListener("click", showAnswer);
