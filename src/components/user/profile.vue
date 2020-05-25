<template>
  <div class="container">
    <div class="profile-content">
      <div class="profile-info">
        <div class="row h-100">
          <div class="col-3">
            <img src="../../assets/avatar.png" class="my-auto shadow p-3 mb-5 bg-white rounded" alt="avatar">
          </div>
          <div class="col-9 my-auto">
            <div class="row">
              <p class="col-sm-3 text-left">Email:</p>
              <div class="col-sm-9 text-left">
                <p>nickwintertaia@gmail.com</p>
              </div>
            </div>
            <div class="row">
              <p class="col-sm-3 text-left">Username:</p>
              <div class="col-sm-9 text-left">
                <p>NickWT</p>
              </div>
            </div>
            <div class="row">
              <p class="col-sm-3 text-left">Account Balance:</p>
              <div class="col-sm-9 text-left">
                <p>V 2600</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12 text-left">
                <button type="button" class="btn btn-dark">Edit <i class="far fa-edit"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="character-info">
        <div class="row h-100">
          <div class="col-6 my-auto">
            <img src="../../assets/fn-character.png" class="my-auto fn-character-image" alt="fn-character">
          </div>
          <div class="col-6">
            <div class="row">
              <p class="col-sm-4 text-left">Fornite Username:</p>
              <div class="col-sm-8 text-left">
                <p>BOOMFA</p>
              </div>
            </div>
            <div class="row">
              <p class="col-sm-4 text-left">Level:</p>
              <div class="col-sm-8 text-left">
                <p>130</p>
              </div>
            </div>
            <div class="row">
              <p class="col-sm-4 text-left">Experience:</p>
              <div class="col-sm-8 text-left">
                <p>10,000</p>
              </div>
            </div>
            <div class="row">
              <p class="col-sm-4 text-left">Skin:</p>
              <div class="col-sm-8 text-left">
                <p>Midas (Gold)</p>
              </div>
            </div>
            <div class="row">
              <p class="col-sm-4 text-left">Rarity:</p>
              <div class="col-sm-8 text-left">
                <p>Rare</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12 text-left">
                <button type="button" class="btn btn-dark">Sync <i class="fas fa-sync"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

const Profile = {
  name: 'profile',
  computed: {
    ...mapState({
      loggedIn: state => state.is.loggedIn,
    })
  },
  mounted() {
    this.checkAuth();
  },
  methods: {
    checkAuth() {
      if (this.loggedIn) {
        return;
      } else {
        return this.$router.push(`/`);
      }
    },
  }
};

export default Profile;
</script>

<style scoped>

.profile-content {
  margin-top: 20px;
}

.profile-info {
  padding: 20px;
  background-color: whitesmoke;
  border-radius: .25rem;
}

.character-info {
  margin-top: 20px;
  padding: 20px;
  background-color: whitesmoke;
  border-radius: .25rem;
}

.fn-character-image {
  height: 500px;
  width: 450px;
  border-radius: .25rem;
}

h1 {
  color: black;
}

</style>