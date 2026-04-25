import { createFileRoute, Link } from "@tanstack/react-router";
import { Terminal } from "lucide-react";
import SkillCard from "#/components/SkillCard";
import { dummySkills } from "@/lib/dummy-skills";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div id="home" className="p-8">
      <section className="hero">
        <div className="copy">
          <h1 className="title">
            The Registry for <br />
            <span className="text-gradient">Agentic Integration</span>
          </h1>
          <p>
            A high-performance registry for procedural agent skills. Discover,
            publish, and operate reusable agent capabilities from a route-driven
            workspace.
          </p>
        </div>
        <div className="actions">
          <Link to="/skills" className="btn-primary">
            <Terminal size={18} />
            <span>Browse Registry</span>
          </Link>
          <Link to="/skills/new" className="btn-secondary">
            <span>Publish Skill</span>
          </Link>
        </div>
      </section>
      <section className="latest">
        <div className="space-y-2">
          <h2 className="subtitle">
            Recently Created <span className="text-gradient">Skills</span>
          </h2>
          <p>
            {" "}
            Latest skills loaded from database in descending creation order.
          </p>
        </div>

        <div>
          {dummySkills.length > 0 && (
            <div className="skills-grid">
              {dummySkills.map((skill) => (
                <div key={skill.id}>
                  <SkillCard key={skill.id} {...skill} />
                </div>
              ))}
            </div>
          )}
          {dummySkills.length === 0 && (
            <p>No skills found. Be the first to publish a skill!</p>
          )}
        </div>
      </section>
    </div>
  );
}
