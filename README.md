# Word Highlighter React 

In this project we will be creating the same functionality as the find function (control + f in windows and command + f on mac)
of the browser.

Most component files have been pre defined for you.
<ul>
<li><code>ParagraphInput</code> component has normal div, but it has <code>contenteditable</code>
property set to true which makes it possible to type inside it. 
Here the user will enter the text they want to search from.
</li>
<li><code>WordInput</code> component will take input for the word we want to highlight/find. We want to highlight each time a character is typed, just like browser find on page functions.</li>

<li>Also make a component which shows the number of found words like in demo, the span which has the actual number of word should have an id=<code>words-counter</code>which will contain the number of words found</li>

<li><code>IgnoreCaseToggler</code>component is a input checkbox which will decide whether we want to it to be case sensitive or not, be default it is. Upon changing it , the highlighted text also should change , as in the demo video</li>
<li>All the highlighted sections of the paragraph will have class="highlighted-text"(hint:- use span in order not to change text spacing )</li>
<li>class .highlighted-text is already defined for you</li>
</ul>
