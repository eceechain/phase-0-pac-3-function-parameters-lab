function introduction(name) {
    return `Hi, my name is ${name}.`;
}
const myNamea = 'Aki';
const result = introduction(name);

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language} in js.`;
}

// Example usage:
const name = "Aki";
const language = "Ember.js";
const introPhrase = introductionWithLanguage(name, language);
console.log(introPhrase); // Output: Hi, my name is Aki and I am learning to program in Ember.js in js.