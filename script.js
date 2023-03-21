function generate() {
  let quotes = { 
  "- Winston S. Churchill" : '"Success is not final; failure is not fatal: It is the courage to continue that counts."',
  "- Herman Melville" : '"It is better to fail in originality than to succeed in imitation."',
  "- Colin R Davis" : '"The road to success and the road to failure are almost exactly the same."' ,
  "- Henry David Thoreau" : '“Success usually comes to those who are too busy looking for it.”',
  "- Unknown" : '“You learn more from failure than from success. Don’t let it stop you. Failure builds character.”',
  "- Winston Churchill" : '“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty."',
  "- Will Rogers" : '“Don’t let yesterday take up too much of today."',
   "- Steve Jobs" : '“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.”',
   "- Dorothy West" : '“To know how much there is to know is the beginning of learning to live.”',
   "- Tony Robbins" : '“Goal setting is the secret to a compelling future.”',
   "- Alexander Graham" : '“Concentrate all your thoughts upon the work in hand. The sun\'s rays do not burn until brought to a focus. “',
   "- Jim Rohn" : '“Either you run the day or the day runs you.”',
   "- Thomas Jefferson" : '“I’m a greater believer in luck, and I find the harder I work the more I have of it.”',
   "- Paulo Coelho" : '“When we strive to become better than we are, everything around us becomes better too.”'
}

let authors = Object.keys(quotes);

let author = authors[Math.floor(Math.random() * authors.length)];

let quote = quotes[author];

document.getElementById("quote").innerHTML = quote;
document.getElementById("author").innerHTML = author;

}
