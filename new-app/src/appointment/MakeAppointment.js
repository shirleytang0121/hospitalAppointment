import React from 'react'

function MakeAppointment(props){
    if(props.toshow){
        return(
        <form>
            <div>
            <label>Name:</label>
            <input type='text' placeholder="enter your name"></input>
            </div>
            <div>
            <label>Tel</label>
            <input type='text' placeholder='enter your tel'/>
            </div>
            <div>
                <select>
                    <option>Dr.AAAA</option>
                    <option>Dr.BBBB</option>
                    <option>Dr.CCCC</option>
                </select>
            </div>
            <div>
                <button type='submit'>submit</button>
            </div>
        </form>
        )
    }else{
        return(
            <p>not fine</p>
        )
        
    }
    
}

export default MakeAppointment;