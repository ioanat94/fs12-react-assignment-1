import SectionTitle from '../SectionTitle/SectionTitle';

function Contact() {
  return (
    <section id='contact'>
      <SectionTitle title={'Contact'} />
      <form action='' className='contact__form'>
        <div className='contact__input'>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' />
        </div>
        <div className='contact__input'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' />
        </div>
        <div className='contact__input'>
          <label htmlFor='message'>Message:</label>
          <textarea id='message'></textarea>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}

export default Contact;
