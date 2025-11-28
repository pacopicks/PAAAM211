import { Platform } from 'react-native';
import * as SQLite from 'expo-sqlite';

class DatabaseService {
  constructor() {
    this.db = null;
    this.storageKey = 'usuarios';
  }

  async initialize() {
    if (Platform.OS === 'web') {
      return;
    } else {
      this.db = await SQLite.openDatabaseAsync('miapp.db');
      await this.db.execAsync(
        `CREATE TABLE IF NOT EXISTS usuarios (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT NOT NULL,
          fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
        );`
      );
    }
  }

  async getAll() {
    if (Platform.OS === 'web') {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } else {
      return await this.db.getAllAsync('SELECT * FROM usuarios ORDER BY id DESC');
    }
  }

  async add(nombre) {
    if (Platform.OS === 'web') {
      const usuarios = await this.getAll();
      const nuevoUsuario = {
        id: Date.now(),
        nombre,
        fecha_creacion: new Date().toISOString()
      };
      usuarios.unshift(nuevoUsuario);
      localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
      return nuevoUsuario;
    } else {
      const result = await this.db.runAsync(
        'INSERT INTO usuarios (nombre) VALUES (?)',
        [nombre]
      );
      return {
        id: result.lastInsertRowId,
        nombre,
        fecha_creacion: new Date().toISOString()
      };
    }
  }

  async update(id, nuevoNombre) {
    if (Platform.OS === 'web') {
      const usuarios = await this.getAll();
      const usuarioIndex = usuarios.findIndex(u => u.id === id);
      
      if (usuarioIndex === -1) {
        throw new Error('Usuario no encontrado');
      }
      
      usuarios[usuarioIndex].nombre = nuevoNombre;
      localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
      return usuarios[usuarioIndex];
    } else {
      await this.db.runAsync(
        'UPDATE usuarios SET nombre = ? WHERE id = ?',
        [nuevoNombre, id]
      );
      
      const usuarios = await this.db.getAllAsync('SELECT * FROM usuarios WHERE id = ?', [id]);
      return usuarios[0];
    }
  }

  async delete(id) {
    if (Platform.OS === 'web') {
      const usuarios = await this.getAll();
      const usuarioIndex = usuarios.findIndex(u => u.id === id);
      
      if (usuarioIndex === -1) {
        throw new Error('Usuario no encontrado');
      }
      
      usuarios.splice(usuarioIndex, 1);
      localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
      return true;
    } else {
      const result = await this.db.runAsync(
        'DELETE FROM usuarios WHERE id = ?',
        [id]
      );
      
      if (result.changes === 0) {
        throw new Error('Usuario no encontrado');
      }
      
      return true;
    }
  }
}

export default new DatabaseService();