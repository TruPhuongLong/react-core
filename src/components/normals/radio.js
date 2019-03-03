import React from 'react'

import './radio.css'

export default () => (
    <div>
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
    </div>
)