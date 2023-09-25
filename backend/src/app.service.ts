// app.service.ts
import { Injectable } from '@nestjs/common';
import { FormSubmissionDto } from './form-submission.dto';

@Injectable()
export class AppService {
  private formSubmissions: FormSubmissionDto[] = [];

  async processFormSubmission(formData: FormSubmissionDto): Promise<string> {
    this.formSubmissions.push(formData);
    return 'Form submitted successfully';
  }

  async retrieveForm(username: string): Promise<FormSubmissionDto | string> {
    const submission = this.formSubmissions.find((data) => data.username === username);
    if (submission) {
      return submission;
    }
    return 'Form not found';
  }
}
