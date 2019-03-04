import React from 'react'

import './learn-html.scss'

export default _ => (
    <div>
        <h1>learning html5</h1>
        <h1>input element and type</h1>
        <a href="mailto:longbaloca@gmail.com">send mail</a>
        <br />
        <a href="tel:+840383884519">call mother</a>
        <br />
        You can populate the subject and body for the new email as well:
        <a href="mailto:longbaloca@gmail.com?subject=Example+subject&body=Message+text">Send email already have body</a>
        <br />
        <input type="search" name="googlesearch" />

        <input type="image" src="../../images/logo.png" alt="image_name" height="50px" width="50px" style={{ objectFit: 'contain', backgroundColor: 'black' }} />
        <br />
        <input type="week" />
        <br />
        <input type="datetime-local" />
        <br />
        <input type="month" />
        <br />
        <fieldset>
            <p><label>Meeting time: <input type='datetime-local' name="meeting.start" /></label></p>
        </fieldset>

        <br />
        <input type="date" />
        <br />
        <br />
        <h1>Div element</h1>
        <header>
            <h1>Blog Post</h1>
            <time datetime="2016-03-13">13th March 2016</time>
        </header>
        <h1>navigation bar</h1>
        <nav className="navbar bg-success ">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
        <input id="cats" type="checkbox" name="Cats" />
        <label for="cats" >I like Cats!</label>
        <h1>March, 4, 2019</h1>

        <iframe width="420" height="315" style={{ backgroundColor: 'red' }}
            src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"
            srcdoc="<p>IFrames are cool!</p>">
             
        </iframe>

        <br />
        <progress value="22" max="100"></progress>
        <br />
        <select name="" size="1">
            <option label="Some Option" value="Some Option" />

            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
        </select>
        <select name="">
            <option value="milk">Milk</option>
            <optgroup label="Fruits">
                <option value="banana">Bananas</option>
                <option value="strawberry">Strawberries</option>
            </optgroup>
            <optgroup label="Vegetables" disabled>
                <option value="carrot">Carrots</option>
                <option value="zucchini">Zucchini</option>
            </optgroup>
        </select>
        <br />
        <input list="Languages"></input>
        <datalist id="Languages">
            <option value="PHP" />
            <option value="Perl" />
            <option value="Python" />
            <option value="Ruby" />
            <option value="C+" />
        </datalist>

<br />
<embed type="video/mp4" src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1" width="640" height="480"></embed>







    </div>
)