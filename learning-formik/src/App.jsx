import { Formik } from 'formik';
import './App.css';
function App(){
  return(
    <>
      <div className="container">
      <Formik 
      initialValues={{
        email : 'romiya@gmail.com',
        password : 'test',
        username: 'romiya',
        address: 'Kathmandu',
      }}
      onSubmit={(value) => {
        console.log(value);
      }}>
      {({values, handleChange, handleSubmit}) => (
           <form>
           <div>
              <label>Email</label>
              <input 
              name="email"
              placeholder='Email'
              value={values.email} 
              onChange={handleChange}
              />
           </div>

           <div>
              <label>Password</label>
              <input 
              name="password"
              placeholder='password'
              value={values.password} 
              onChange={handleChange}
              />
           </div>

           <div>
              <label> Username</label>
              <input 
              name="username"
              placeholder='Username'
              value={values.username} 
              onChange={handleChange}
              />
           </div>

           <div>
              <label>Address</label>
              <input 
              name="address"
              placeholder='Address'
              value={values.address} 
              onChange={handleChange}
              />
           </div>

           <button type='submit' onClick={handleSubmit}>Submit</button>

       </form>
      )}
      </Formik>
      </div>
    </>
  )
}
export default App;