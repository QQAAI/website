import './ContactUs.scss';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-header text-center">
        <h1 className='p-0 m-0'>Contact Us</h1>
        <p>
          Ready to start exploring the power of AI in your industry? Complete the contact form now and take the
          first step towards innovative solutions and exceptional results.
        </p>
      </div>

      <div className="form-embed flex justify-content-center">
        <iframe
          id="JotFormIFrame-241815056613655"
          title="Quick Quality Analysis"
          allow="geolocation; microphone; camera; fullscreen"
          allowTransparency={true}
          src="https://form.jotform.com/241815056613655"
          frameBorder="0"
          scrolling="yes"
        />
        <script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"></script>
        <script>
          {`window.jotformEmbedHandler("iframe[id='JotFormIFrame-241815056613655']", "https://form.jotform.com/")`}
        </script>
      </div>
    </div>
  );
};

export default ContactUs;
