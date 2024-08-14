import React from 'react'
import '../css/skills.css'

const Skills = () => {
    return (
        <div>
            <section className="skills section" id="skills">
                <h2 className="section_title">Skills</h2>
                <span className="section_subtitle">My technical level</span>

                <div className="skills_container container grid">
                    <div className="skills_content">
                        <h3 className="skills_title">Frontend</h3>

                        <div className="skills_box">
                            <div className="skills_group">
                                <div className="skills_data">
                                    <i class="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills_name">HTML</h3>
                                        <span className="skills_level">Advance</span>
                                    </div>
                                </div>

                                <div className="skills_data">
                                    <i class="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills_name">CSS</h3>
                                        <span className="skills_level">Intermediate</span>
                                    </div>
                                </div>

                                <div className="skills_data">
                                    <i class="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills_name">JavaScript</h3>
                                        <span className="skills_level">Intermediate</span>
                                    </div>
                                </div>

                                <div className="skills_data">
                                    <i class="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills_name">JQuery</h3>
                                        <span className="skills_level">Beginner</span>
                                    </div>
                                </div>

                            </div>

                            <div className="skills_group">
                                <div className="skills_data">
                                    <i class="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills_name">Bootstrap</h3>
                                        <span className="skills_level">Beginner</span>
                                    </div>
                                </div>

                                <div className="skills_data">
                                    <i class="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills_name">Git/GitHub</h3>
                                        <span className="skills_level">Beginner</span>
                                    </div>
                                </div>

                                <div className="skills_data">
                                    <i class="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills_name">React</h3>
                                        <span className="skills_level">Intermediate</span>
                                    </div>
                                </div>

                                <div className="skills_data">
                                    <i class="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills_name">Tailwind CSS</h3>
                                        <span className="skills_level">Intermediate</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="skills_content">
                        <h3 className="skills_title">Backend</h3>

                        <div className="skills_box">
                            <div className="skills_group">
                                <div className="skills_data">
                                    <i class="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills_name">MongoDB</h3>
                                        <span className="skills_level">Intermediate</span>
                                    </div>
                                </div>

                                <div className="skills_data">
                                    <i class="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills_name">Node.js</h3>
                                        <span className="skills_level">Intermediate</span>
                                    </div>
                                </div>

                                <div className="skills_data">
                                    <i class="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills_name">SQL</h3>
                                        <span className="skills_level">Intermediate</span>
                                    </div>
                                </div>
                            </div>

                            <div className="skills_group">
                                <div className="skills_data">
                                    <i class="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills_name">Express.js</h3>
                                        <span className="skills_level">Intermediate</span>
                                    </div>
                                </div>

                                <div className="skills_data">
                                    <i class="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills_name">MySQL</h3>
                                        <span className="skills_level">Intermediate</span>
                                    </div>
                                </div>

                                <div className="skills_data">
                                    <i class="bx bx-badge-check"></i>

                                    <div>
                                        <h3 className="skills_name">APIs</h3>
                                        <span className="skills_level">Intermediate</span>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills