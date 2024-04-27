import $api from '../api';

export default class AuthService {
  static async login(phone) {
    return $api.post('/login', { phone });
  }
}
