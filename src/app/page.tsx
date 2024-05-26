export { metadata } from "@/app/layout";

export default function Home() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Hello!</h1>
        {/* <h2>It&apos;s my home on the internet</h2> */}
      </div>

      <p className="text-sm">
        I am Anupam Singh, deeply interested in coding and hacking
        ,with a primary focus on cybersecurity.
        am particularly fascinated by application security, 
        and I am always seeking to deepen my expertise through continuous research. In addition to my technical pursuits
        <br />
        <br />I am an avid fan of anime, 
       with a preference for action and psychological thrillers. I also enjoy exploring various aspects of history and space exploration, particularly the achievements of ancient civilizations and the future possibilities of space travel. Gaming is another passion, where I prefer strategy and role-playing games.
        . If you want to work with me, let’s contact via{" "}
        <a className="link" href="mailto:anupam936574@gmail.com">
          email.
        </a>
        <br />
        <br />
        I write tech notes/bookmarks that may be helpful on{" "}
        {/* <a className="link" href="https://notes.zeyadetman.com"></a> */}
        {/* <br />I write tech notes/bookmarks that may be helpful on{" "}
        <a className="link" href="https://notes.zeyadetman.com">
          my digital garden 🪴
        </a>
        . I share on it at short intervals, also I review the written notes from
        time to time to update them either adding more details or rephrasing
        them.
        <br />
        <br />
        <i>النسخة العربية ستأتى قريبًا.</i> */}
      </p>
    </div>
  );
}
