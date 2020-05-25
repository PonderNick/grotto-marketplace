<script>
import config from '../../config.json';

const Router = {
  endpoints: {
    items: `https://${config.api.fortnite}/items/list?lang=en`
  },
  Auth: {
    fortnite: config.auth.fortnite
  },
};

export default Router;
</script>