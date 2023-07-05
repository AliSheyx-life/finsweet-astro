export enum JwtEnum {
  accessToken = "access_token",
  refreshToken = "refresh_token",
  userData = "user_data",
  roles = "roles",
}

class UseJwt {
  isUserAuthorized = false;

  isAutorized() {
    const token = this.getAccessToken();
    if (this.getUserData() && token) {
      const isUserAutorized = this.getUserData();
      return isUserAutorized.isUserAutorized;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(JwtEnum.userData);
    localStorage.removeItem(JwtEnum.accessToken);
    localStorage.removeItem(JwtEnum.refreshToken);
    this.isUserAuthorized = false;
  }

  setRoles(roles: any) {
    localStorage.setItem(JwtEnum.roles, JSON.stringify(roles));
  }

  getRoles() {
    const roles = localStorage.getItem(JwtEnum.roles);
    if (roles) {
      return JSON.parse(roles);
    }
  }

  setUserData(data: any) {
    data.isUserAutorized = true;
    localStorage.setItem(JwtEnum.userData, JSON.stringify(data));
  }

  getUserData() {
    const userData = localStorage.getItem(JwtEnum.userData);
    if (userData) {
      return JSON.parse(userData);
    }
  }

  setAccessToken(token: string) {
    localStorage.setItem(JwtEnum.accessToken, JSON.stringify(token));
  }

  getAccessToken() {
    const accessToken = localStorage.getItem(JwtEnum.accessToken);
    if (accessToken) {
      const token = JSON.parse(accessToken);
      return token;
    }
  }

  setRefreshToken(token: string) {
    localStorage.setItem(JwtEnum.refreshToken, token);
  }

  getRefreshToken() {
    const refreshToken = localStorage.getItem(JwtEnum.refreshToken);
    if (refreshToken) {
      return JSON.parse(refreshToken);
    }
  }
}

const useJwt = new UseJwt();

export default useJwt;
