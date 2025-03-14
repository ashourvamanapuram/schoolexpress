import { HttpClient } from '@angular/common/http';

export class SchoolexpressService {
  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get('https://api.schoolexpress.com/projects');
  }

  createProject(projectData) {
    return this.http.post('https://api.schoolexpress.com/projects', projectData);
  }

  updateProject(id, projectData) {
    return this.http.put(`https://api.schoolexpress.com/projects/${id}`, projectData);
  }

  deleteProject(id) {
    return this.http.delete(`https://api.schoolexpress.com/projects/${id}`);
  }
}