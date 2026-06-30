
import Link from "next/link";
import Image from "next/image";
import { connectToDatabase } from "@/lib/mongodb";

function formatDayMonth(iso?: string) {
  if (!iso) return { day: "00", month: "Mon" };
  const d = new Date(iso);
  return {
    day: String(d.getDate()).padStart(2, "0"),
    month: d.toLocaleString("en-US", { month: "short" }),
  };
}

export default async function Blog() {
  const { db } = await connectToDatabase();

  const blogs = await db
    .collection("blogs")
    .find({})
    .sort({ createdAt: -1 })
    .limit(3) // ✅ ONLY LATEST 3
    .toArray();

  const delays = ["100ms", "300ms", "600ms"];

  return (
    <section className="blog-one">
      <div className="container">
        <div className="blog-one__top">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">
                Electrician Blog & Local Electrical News
              </span>
            </div>
            <div className="section-title__title-box sec-title-animation animation-style2">
              <h2 className="section-title__title title-animation">
                Electrical Safety & Repair Tips
                <br /> from Surat Electricians
              </h2>
            </div>
          </div>
          <div className="blog-one__btn-box">
            <Link href="/blog" className="blog-one__btn thm-btn">
              View all Blog
            </Link>
          </div>
        </div>

        <div className="row">
          {blogs.map((blog: any, index: number) => {
            const { day, month } = formatDayMonth(blog.createdAt);

            return (
              <div
                key={blog._id.toString()}
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay={delays[index]}
              >
                <div className="blog-one__single">
                  <div className="blog-one__img-box">
                    <div className="blog-one__img">
                      <Image
                        src={blog.image || "/assets/images/blog/blog-1-1.jpg"}
                        alt={`${blog.title} - Electrician services in Surat`}
                        width={400}
                        height={300}
                      />
                      <Image
                        src={blog.image || "/assets/images/blog/blog-1-1.jpg"}
                        alt={blog.title}
                        width={400}
                        height={300}
                      />
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="blog-one__link"
                      >
                        <span className="sr-only">Read {blog.title}</span>
                      </Link>
                    </div>

                    <div className="blog-one__date">
                      <p>
                        {day}
                        <br />
                        {month}
                      </p>
                    </div>
                  </div>

                  <div className="blog-one__content">
                    <div className="blog-one__user">
                      <p>
                        <span className="icon-user"></span>
                        By {blog.author || "Admin"}
                      </p>
                    </div>

                    <h3 className="blog-one__title">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h3>

                    <Link
                      href={`/blog/${blog.slug}`}
                      className="blog-one__learn-more"
                    >
                      Learn More
                      <span className="icon-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
