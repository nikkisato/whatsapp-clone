import { Circle } from 'better-react-spinkit';

function Loading() {
  return (
    <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <div>
        <img
          style={{ marginBottom: 10 }}
          height={200}
          src='https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Logo.png'
          alt='whats app logo'
        />
        <Circle color='#3CBC28' size={60} />
      </div>
    </center>
  );
}

export default Loading;
