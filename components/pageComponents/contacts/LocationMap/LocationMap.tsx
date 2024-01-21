import styles from './LocationMap.module.scss';

function LocationMap() {
  return (
    <div className={styles.LocationMap}>
      <iframe
        title="Monitaet location"
        width="100%"
        height="100%"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.721094710176!2d10.109184466349207!3d52.993389678760494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1cc8fc429702b%3A0x19610145e6d0523e!2sRehrhofer%20Weg%20102%2C%2029633%20Munster%2C%20Germany!5e0!3m2!1sen!2spl!4v1678888145346!5m2!1sen!2spl"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default LocationMap;
