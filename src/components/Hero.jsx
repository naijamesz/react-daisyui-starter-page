export default function Hero() {
  return (
    <div
      className='hero min-h-screen'
      style={{ backgroundImage: 'url(https://strapi.dhiwise.com/uploads/daisy_ui_OG_Image_78c97df537.webp)' }}>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <div>
            <h1 className='text-3xl font-bold'>React + DaisyUi Template</h1>
            <div>
              <h4 className='text-xl font-bold underline text-center'>
                Create by{' '}
                <a href='https://github.com/naijamesz' target='_blank'>
                  James Thanawat
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
