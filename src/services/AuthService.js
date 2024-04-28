import $api from '../api';

export default class AuthService {
  static async login(phoneNumber, code) {
    return $api.post(`/login?phoneNumber=${phoneNumber}&code=${code}`);
  }
}
