import React from 'react'

function NewStudioForm() {
  return (
    <div>
      <form className='newStudioForm'>
        <input type='text' placeholder='Enter Studio Name' name="studioName" value={}/>
        <input type='text' placeholder='Enter Studio Location' name="studioLocation" value={}/>
        <input type='text' placeholder='Enter Instruments Available Seperated by a comma' name="instruments" value={}/>
        <input type='url' placeholder='Enter URL for the studio profile image' name="endTime" value={}/>
        <input type='text' placeholder='A word to artists booking with you' name="description" value={}/>
        <input type='submit' name="submit" />
    </form>
  </div>
  )
}

export default NewStudioForm