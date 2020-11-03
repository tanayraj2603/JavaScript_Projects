class Github {
  constructor() {
    this.client_id = '3e1160e38739f50406d7';
    this.client_secret = '285ef113170ec39a06a2fdb137be51921b31e63a';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse =await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);

    const repoResponse =await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos
    }
  }
}