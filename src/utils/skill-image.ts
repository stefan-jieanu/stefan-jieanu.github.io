import aws from '/public/svg/skills/aws.svg';
import django from '/public/svg/skills/django.svg';
import docker from '/public/svg/skills/docker.svg';
import git from '/public/svg/skills/git.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import python from '/public/svg/skills/python.svg';
import react from '/public/svg/skills/react.svg';
import typescript from '/public/svg/skills/typescript.svg';


export const skillsImage = (skill: string) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'docker':
      return docker;
    case 'react':
      return react;
    case 'typescript':
      return typescript;
    case 'mongodb':
      return mongoDB;
    case 'postgresql':
      return postgresql;
    case 'python':
      return python;
    case 'aws':
      return aws;
    case 'django':
      return django;
    case 'git':
      return git;
    default:
      break;
  }
}