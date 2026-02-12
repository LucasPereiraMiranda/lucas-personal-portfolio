import {
  projects,
  getAllTechnologies,
  getProjectTypes,
  getFeaturedProjects,
  filterProjects,
} from "@/data/projects";

describe("projects data utilities", () => {
  describe("getAllTechnologies", () => {
    it("returns sorted unique technologies", () => {
      const techs = getAllTechnologies();

      expect(techs.length).toBeGreaterThan(0);
      expect(techs).toEqual([...new Set(techs)].sort());
    });
  });

  describe("getProjectTypes", () => {
    it("returns sorted unique project types", () => {
      const types = getProjectTypes();

      expect(types.length).toBeGreaterThan(0);
      expect(types).toEqual([...new Set(types)].sort());
    });
  });

  describe("getFeaturedProjects", () => {
    it("returns only featured projects", () => {
      const featured = getFeaturedProjects();

      expect(featured.length).toBeGreaterThan(0);
      expect(featured.every((p) => p.featured)).toBe(true);
    });
  });

  describe("filterProjects", () => {
    it("returns all projects when no filters applied", () => {
      expect(filterProjects(projects)).toEqual(projects);
    });

    it("filters by technology", () => {
      const result = filterProjects(projects, "Go");

      expect(result.length).toBeGreaterThan(0);
      expect(result.every((p) => p.technologies.includes("Go"))).toBe(true);
    });

    it("filters by type", () => {
      const result = filterProjects(projects, undefined, "cli");

      expect(result.length).toBeGreaterThan(0);
      expect(result.every((p) => p.type === "cli")).toBe(true);
    });

    it("filters by technology and type combined", () => {
      const result = filterProjects(projects, "HTML", "web");

      expect(result.length).toBeGreaterThan(0);
      expect(
        result.every((p) => p.technologies.includes("HTML") && p.type === "web")
      ).toBe(true);
    });

    it("returns empty array when no matches", () => {
      expect(filterProjects(projects, "Rust")).toEqual([]);
    });
  });
});
