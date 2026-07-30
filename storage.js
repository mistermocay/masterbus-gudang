window.storage = {
  async get(key) {
    const value = localStorage.getItem(key);
    return value ? { value } : null;
  },

  async set(key, value) {
    localStorage.setItem(key, value);
    return true;
  },

  async remove(key) {
    localStorage.removeItem(key);
    return true;
  },

  async clear() {
    localStorage.clear();
    return true;
  }
};