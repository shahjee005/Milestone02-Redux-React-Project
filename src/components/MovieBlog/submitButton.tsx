import * as React from 'react';
import { BlogPost } from '../../store/blogPost/types';

export interface ISubmitButtonProps {
  blogPosts: BlogPost[];
  blogPostDescription: string;
}

export class SubmitButton extends React.Component<ISubmitButtonProps> {
  public render() {
    return (
      <div>

      </div>
    );
  }
}