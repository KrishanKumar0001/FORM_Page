
import './App.css'

function App() {


  return (
<div className='container'>
  <form >
    <label htmlFor="FirstName">First_Name*</label>
    <input type="text"placeholder='Enter your FirstName' />
    <br />
    <label htmlFor="LastName">Last_Name*</label>
    <input type="text"placeholder='Enter your LastName' />
    <br />
     <label htmlFor="Gender">Gender*</label>
    <input type="radio"   placeholder='Enter your Email' name ='gender'/> MALE
    <input type="radio"   placeholder='Enter your Email' name ='gender'/> FEMALE
    <input type="radio"   placeholder='Enter your Email' name ='gender'/> OTHER 
    <br />
    <label htmlFor="Email">Email*</label>
    <input type="email" placeholder='Enter your Email' />
    <br />
     <label htmlFor="Contact">Mobile no*</label>
    <input type="tel"placeholder='Enter your Mobile number ' />
    <br />
    <label htmlFor="DOB">DOB*</label>
    <input type="Date"placeholder='Enter your DOB' />
    <br />
      <label htmlFor="Resume">Resume/ CV</label>
    <input type="file"placeholder='Enter your CV' />
    <br />
     <label htmlFor="Url">Project_url</label>
    <input type="url"placeholder='Enter your gitub url' />
    <br />
     <label htmlFor="Description">About</label>
    <textarea  id='about'cols="30" rows="10" />
    <br />
   <button type="reset">Reset</button>

    <br />

    <button type="Submit">Submit</button>

  </form>
</div>
  );
}

export default App
