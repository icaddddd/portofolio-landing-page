import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { personalInfo, experiences, education, skillsData, projects, certifications } from '@/lib/data';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#111111',
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    color: '#444444',
    marginBottom: 5,
  },
  contact: {
    fontSize: 10,
    color: '#666666',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingBottom: 3,
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  itemSubtitle: {
    fontSize: 11,
    fontStyle: 'italic',
    color: '#444444',
  },
  itemDate: {
    fontSize: 10,
    color: '#666666',
  },
  text: {
    fontSize: 10,
    lineHeight: 1.4,
    color: '#333333',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  skillTag: {
    fontSize: 9,
    backgroundColor: '#EEEEEE',
    padding: '3 5',
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 3,
  },
});

const CVDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{personalInfo.name}</Text>
        <Text style={styles.title}>{personalInfo.title}</Text>
        <Text style={styles.contact}>Email: contact@rhisjad-djavatri.site | Portfolio: rhisjad-djavatri.site</Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.text}>{personalInfo.summary}</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          {skillsData.hardSkills.map((skill, index) => (
            <Text key={index} style={styles.skillTag}>{skill.name}</Text>
          ))}
        </View>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {experiences.map((exp) => (
          <View key={exp.id} style={styles.item}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{exp.role}</Text>
              <Text style={styles.itemDate}>{exp.period}</Text>
            </View>
            <Text style={styles.itemSubtitle}>{exp.company}</Text>
            <Text style={styles.text}>{exp.description}</Text>
          </View>
        ))}
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        {projects.map((project) => (
          <View key={project.title} style={styles.item}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{project.title.replace(/ \+\]/g, '')}</Text>
            </View>
            <Text style={styles.itemSubtitle}>{project.company.replace(/ \+\]/g, '')}</Text>
            <Text style={styles.text}>{project.description.replace(/ \+\]/g, '')}</Text>
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {education.map((edu) => (
          <View key={edu.id} style={styles.item}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{edu.degree}</Text>
              <Text style={styles.itemDate}>{edu.period}</Text>
            </View>
            <Text style={styles.itemSubtitle}>{edu.institution}</Text>
          </View>
        ))}
      </View>

    </Page>
  </Document>
);

export default CVDocument;
