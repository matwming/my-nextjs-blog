'use client';
import { useRouter } from 'next/router'
import cn from 'classnames'
import { useConfig } from '@/lib/config'
await import('lit-talk');
const Comments = ({ frontMatter }) => {
  const BLOG = useConfig();
  const fullWidth = frontMatter.fullWidth ?? false

  const githubOauthOptions=JSON.stringify({
    postUniqueId: frontMatter.id,
    title: frontMatter.title,
    clientID: BLOG.comment.littalkConfig.clientID,
    clientSecret: BLOG.comment.littalkConfig.clientSecret,
    repo: BLOG.comment.littalkConfig.repo,
    owner: BLOG.comment.littalkConfig.owner,
  });

  return (
    <div
      className={cn(
        'px-4 font-medium text-gray-500 dark:text-gray-400 my-5',
        fullWidth ? 'md:px-24' : 'mx-auto max-w-2xl',
      )}
    >
      <lit-talk github-oauth-options={githubOauthOptions}>
      </lit-talk>
    </div>
  )
}

export default Comments
