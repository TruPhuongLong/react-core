import React from 'react'

import './radio.css'

export default () => (
    <div>
        <form>
            <input type="radio" class="radio" name="test" id='i1' defaultChecked />
            <input type="radio" class="radio" name="test" id='i2' />
            <input type="radio" class="radio" name="test" id='i3' />
            <input type="radio" class="radio" name="test" id='i4' />
            <input type="radio" class="radio" name="test" id='i5' />
            <br />
            <input type="radio" class="radio2" name="test2" id='b1' defaultChecked />
            <input type="radio" class="radio2" name="test2" id='b2' />
            <input type="radio" class="radio2" name="test2" id='b3' />
            <input type="radio" class="radio2" name="test2" id='b4' />
            <input type="radio" class="radio2" name="test2" id='b5' />



            Marks: <input type="number" size="6" name="marks" min="0" max="10" />
            Subject Feedback: <input type="range" size="3" step="0.1" name="feedback" min="1" max="5" />

            <input type="file" name="fileSubmission" accept="image/x-png,image/gif,image/jpeg" />

            <input type="reset" value="reset"/>
            <input type="menu" value=""/>
            
        </form>
    </div>
)